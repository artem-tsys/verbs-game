import {random} from 'lodash';

export const getUniqTwoRandomElements = (elements) => {
  const firstIndex = random(0, elements.length - 1);
  const firstElem = elements[firstIndex];

  const filteredElements = elements.filter((elem, i) => i !== firstIndex);
  const secondIndex = random(0, filteredElements.length - 1);
  const secondElement = filteredElements[secondIndex];

  return [firstElem, secondElement];
};
