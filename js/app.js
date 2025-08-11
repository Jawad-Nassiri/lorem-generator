let loremText = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates hic alfacere quos eveniet repudiandae quasi unde, dolorem dolor, eius modi tempore blanditdoloribus vel at, magnam nostrum magni.",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates hic alfacere quos eveniet repudiandae quasi unde, dolorem dolor, eius modi tempore blanditdoloribus vel at, magnam nostrum magni.",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates hic alfacere quos eveniet repudiandae quasi unde, dolorem dolor, eius modi tempore blanditdoloribus vel at, magnam nostrum magni.",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates hic alfacere quos eveniet repudiandae quasi unde, dolorem dolor, eius modi tempore blanditdoloribus vel at, magnam nostrum magni.",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates hic alfacere quos eveniet repudiandae quasi unde, dolorem dolor, eius modi tempore blanditdoloribus vel at, magnam nostrum magni.",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates hic alfacere quos eveniet repudiandae quasi unde, dolorem dolor, eius modi tempore blanditdoloribus vel at, magnam nostrum magni.",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates hic alfacere quos eveniet repudiandae quasi unde, dolorem dolor, eius modi tempore blanditdoloribus vel at, magnam nostrum magni.",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates hic alfacere quos eveniet repudiandae quasi unde, dolorem dolor, eius modi tempore blanditdoloribus vel at, magnam nostrum magni.",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates hic alfacere quos eveniet repudiandae quasi unde, dolorem dolor, eius modi tempore blanditdoloribus vel at, magnam nostrum magni.",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates hic alfacere quos eveniet repudiandae quasi unde, dolorem dolor, eius modi tempore blanditdoloribus vel at, magnam nostrum magni.",
  
  
];



const inputElem = document.querySelector('input'),
  contentElem = document.querySelector('.content'),
  generateTextBtn = document.querySelector('.create-button'),
  copyTextBtn = document.querySelector('.copy-button');




const generateTextHandler = () => {
  let paragraphCount = inputElem.value;

  if (paragraphCount <= 0 || paragraphCount > 10 || isNaN(paragraphCount)) {
    alert('Please enter a number between 1 and 10 !');
  } else {
    let generatedText = loremText.slice(0, paragraphCount);
    contentElem.textContent = generatedText;
  }
}

const copyTextHandler = () => {

  if(contentElem.textContent !== "") {
    navigator.clipboard.writeText(contentElem.textContent);
    document.querySelector('.toast').classList.add('visible')
  }


    setTimeout(() => {
      document.querySelector('.toast').classList.remove('visible')
    }, 3000);


}



generateTextBtn.addEventListener('click', generateTextHandler)
copyTextBtn.addEventListener('click', copyTextHandler)

