const submitBtn = document.querySelector('input[type="submit"]');
const input = document.querySelector('.input');
const finalSize = document.querySelector('#panel-width');
const totalPanels = document.querySelector('#number-of-panels');
const rollSize = document.querySelector('#roll-size');

const calculatePanels = (e) => {
    e.preventDefault();
    // defaults
    const rollWidth = rollSize.value ? rollSize.value - 1 : 48;
    console.log(rollSize);
    console.log(rollWidth);

    const gapSize = 0.5;
    // convert input to a number
    const totalWidth = Number(input.value);
    // these two give extra room, round up panels so we know how many we'll need
    const totalWidthRoundedUp = Math.ceil(totalWidth);
    const numberOfPanels = Math.ceil(totalWidthRoundedUp / rollWidth);
    // gaps are areas between the panels
    const gaps = numberOfPanels - 1;
    // get size with gaps
    const widthWithGaps = totalWidth + gapSize * gaps;
    // figure out our panel size
    const panelSize = widthWithGaps / numberOfPanels;
    // The rest is to make it look nice and validate
    let panelString = panelSize.toString();
    // ensure result is limited to thousandths place
    let panelArray = panelString.split('');
    let newPanelArray =
        panelArray.length > 6 ? panelArray.slice(0, 6) : panelArray;
    let panel = newPanelArray.join('');
    // test for valid input
    finalSize.textContent = !Number.isNaN(Number(panel))
        ? `${panel}"`
        : 'Please enter a valid number';
    totalPanels.textContent = numberOfPanels;
    input.focus();
    input.select();
};

submitBtn.addEventListener('click', calculatePanels);

input.focus();
input.select();
