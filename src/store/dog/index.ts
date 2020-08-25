import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '..';
import classifierService from '../../services/classifier-service';
import photosService from '../../services/photo-service';

interface DogState {
  breed?: string;
  error?: string;
  preview?: string;
  results?: string[];
  step: 'loading' | 'upload' | 'preview' | 'results' | 'error';
}

const initialState = {
  step: 'upload',
} as DogState


const classify = createAsyncThunk<{ breed: string, results: string[] }, undefined, { state: RootState }>(
  'dog/classify',
  async (_, { getState, rejectWithValue }) => {
    const { preview } = getState().dog
    let breed
    let results

    try {
      breed = await classifierService(preview!);
      results = await photosService(breed);
    } catch ({ message }) {
      return rejectWithValue(message as string)
    }

    return {
      breed,
      results
    };
  }
)


const { reducer, ...slice } = createSlice({
  name: 'dog',
  initialState,
  reducers: {
    reset: () => initialState,
    setImage: (_, { payload: preview }: PayloadAction<string>) => ({
      step: 'preview',
      preview,
    })
  },
  extraReducers: builder => {
    builder
      .addCase(classify.pending, (state) => ({
        ...state,
        step: "loading"
      }))
    
    builder
      .addCase(classify.fulfilled, (state, { payload: { breed, results } }) => ({
        ...state,
        results,
        breed,
        step: "results"
      }))
    
    builder
      .addCase(classify.rejected, (state, { payload }) => ({
        ...state,
        error: payload as string,
        step: 'error',
      }))
  }
});

const actions = {
  ...slice.actions,
  classify
}


export { reducer, actions };
