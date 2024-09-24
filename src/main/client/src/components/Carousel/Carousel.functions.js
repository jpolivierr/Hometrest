
const getProps = (width, aspectRatio, gap) =>{


       switch(true){
        case width >= 1100 :
            return {split: 4, padding : aspectRatio};
        case width >= 644 && width < 1100:
            return {split: 3, padding : aspectRatio + 8};
        case  width < 644:
            return {split: 2, padding : aspectRatio + 22};
         default :
         return {split: 4, aspectRatio : 26};
       }

}

export function handleSizeChange(entries, setItemWidth, setItemPaddingTop,aspectRatio) {
    for (const entry of entries) {
        const { target } = entry;
        const { width } = target.getBoundingClientRect();

        const widthNumber = parseFloat(width.toFixed(2))
        const props = getProps(widthNumber, aspectRatio)

        setItemWidth((100 / props.split))
        setItemPaddingTop(props.padding)
        
    }
}

