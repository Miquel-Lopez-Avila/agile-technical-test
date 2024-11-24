import { faker } from '@faker-js/faker';
import { Animal } from '../interfaces';

const getImage = () =>
  faker.image.urlLoremFlickr({
    category: 'animals',
    width: 644,
    height: 362
  });
const getType = () => faker.animal.type() as keyof typeof faker.animal;
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = (type: keyof typeof faker.animal) =>
  faker.animal[type]?.() || 'Lorem ipsum';

export const getAllAnimals = () =>
  Object.keys(faker.animal).filter(
    (item) => item !== 'faker' && item !== 'type' && item !== 'petName'
  );

const data: Animal[] = [...new Array(100)].map((_, index) => {
  const type = getType();

  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(type),
    description: getText(),
    image: getImage()
  };
});

export default data;
