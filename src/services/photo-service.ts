const photosService = async (breed: string): Promise<string[]> => {
  const fetchResult = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  const { message } = await fetchResult.json();

  if (!fetchResult.ok) {
    throw new Error(message);
  }

  return message;
};

export default photosService;
