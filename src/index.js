const submitBtn = document.querySelector('button');
const input = document.querySelector('input');

const calculatePanels = (e) => {
    e.preventDefault();
    const rollWidth = 45;
    const gapSize = 0.5;
    const totalWidth = Number(input.value);
    const totalWidthRoundedUp = Math.ceil(totalWidth);
    const numberOfPanels = Math.ceil(totalWidthRoundedUp / rollWidth);
    const gaps = numberOfPanels - 1;
    const widthWithGaps = totalWidth + gapSize * gaps;
    const panelSize = widthWithGaps / numberOfPanels;
    console.log(panelSize);
};

submitBtn.addEventListener('click', calculatePanels);
