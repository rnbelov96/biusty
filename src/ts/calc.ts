/* eslint-disable no-param-reassign */
export {};

const leftColor = '#ff4a76';
const rightColor = '#e9e1e3';

const rangeElList = document.querySelectorAll('.js-range');

const underwearRange = document.querySelector(
  '.js-underwear-range',
) as HTMLInputElement;
const correctRange = document.querySelector(
  '.js-correct-range',
) as HTMLInputElement;
const homeRange = document.querySelector('.js-home-range') as HTMLInputElement;
const sportRange = document.querySelector(
  '.js-sport-range',
) as HTMLInputElement;

const calcResultLabelEl = document.querySelector(
  '.js-calc-result',
) as HTMLSpanElement;

let result: number;

let underwearCurrentStep = 2;
let correctCurrentStep = 2;
let homeCurrentStep = 2;
let sportCurrentStep = 2;

const calcResult = () => {
  result = (Number(underwearRange.value) * 4500
      + Number(correctRange.value) * 3000
      + Number(homeRange.value) * 4250
      + Number(sportRange.value) * 4500)
    * 0.388;
  calcResultLabelEl.textContent = result.toLocaleString();
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

underwearRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  underwearCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (underwearCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (underwearCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

correctRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  correctCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (correctCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (correctCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

homeRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  homeCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (homeCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (homeCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

sportRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  sportCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (sportCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (sportCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});
