const states = [
    'alabama',
    'alaska',
    'arizona',
    'arkansas',
    'california',
    'colorado',
    'connecticut',
    'delaware',
    'florida',
    'georgia',
    'hawaii',
    'idaho',
    'illinois',
    'indiana',
    'iowa',
    'kansas',
    'kentucky',
    'louisiana',
    'maine',
    'maryland',
    'massachusetts',
    'michigan',
    'minnesota',
    'mississippi',
    'missouri',
    'montana',
    'nebraska',
    'nevada',
    'new hampshire',
    'new jersey',
    'new mexico',
    'new york',
    'north carolina',
    'north dakota',
    'ohio',
    'oklahoma',
    'oregon',
    'pennsylvania',
    'rhode island',
    'south carolina',
    'south dakota',
    'tennessee',
    'texas',
    'utah',
    'vermont',
    'virginia',
    'washington',
    'west virginia',
    'wisconsin',
    'wyoming'
  ]
  

  const stateAbbreviations = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  export function parseAddress2(value) {

    const input = value.trim().replace(/\s{2,}/g, ' ')
                               .replaceAll(",","") 

    const address = {
        city: '',
        state: '',
        state_code : '',
        postal_code: '',
      };
    
        const parts = input.split(' ');

        if(parts.length > 0){

             if(parts.length === 2 && input.toLowerCase() === "new york" ){
               address.city = input
               return address
             }
            let getCity = input

            const findStateCode = parts.filter(state => stateAbbreviations.includes(state.toUpperCase()))
            const findState = states.find(state => input.includes(state))


            if(findStateCode && findStateCode.length > 0){
                address.state_code  = findStateCode[0]
                getCity = getCity.replace(findStateCode[0], "")
            }

            if(findState && findState.length > 0){
                address.state = findState
                getCity = getCity.replace(findState, "")
            }

            const zipPattern = /\b\d{5}(?:[-\s]\d{4})?\b/;
            const zipMatch = input.match(zipPattern);
            const zipCode = zipMatch ? zipMatch[0] : '';

            if(zipCode){

                address.postal_code = zipCode
                getCity = getCity.replace(zipCode, "")

            }

            if(getCity.trim().length > 0){
                address.city = getCity.trim()
            }

            return address

        }
    
    
  }
  