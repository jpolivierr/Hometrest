

const shortenText = (address, char) => {
        const max = char
        if(address.length >= max){
            const formatAddress = address.substr(0, max - 3) + "..."
               return formatAddress;
        }
        return address
    }

export default shortenText