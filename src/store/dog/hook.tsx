
import { useDispatch, RootState } from '..';
import { useSelector } from 'react-redux';
import { actions } from '.';

const useDog = () => {
  const dispatch = useDispatch();

  return {
    step: useSelector((state: RootState) => state.dog.step),
    breed: useSelector((state: RootState) => state.dog.breed),
    error: useSelector((state: RootState) => state.dog.error),
    preview: useSelector((state: RootState) => state.dog.preview),
    results: useSelector((state: RootState) => state.dog.results),
    reset: () => dispatch(actions.reset()),
    setImage: (image: File) => {
      const payload = URL.createObjectURL(image)
      dispatch(actions.setImage(payload))
    },
    searchPictures: () => dispatch(actions.classify())
  };
};

export default useDog