const submitBtn = document.querySelector('input[type="submit"]');
const input = document.querySelector('.input');
const finalSize = document.querySelector('#panel-width');

const calculatePanels = (e) => {
    e.preventDefault();
    // defaults
    const rollWidth = 48;
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
    let panelArray = panelString.split('');
    console.log(panelArray);

    let newPanelArray =
        panelArray.length > 6 ? panelArray.slice(0, 6) : panelArray;
    let panel = newPanelArray.join('');
    finalSize.textContent = !Number.isNaN(Number(panel))
        ? `${panel}"`
        : 'Please enter a valid number';
};

submitBtn.addEventListener('click', calculatePanels);
