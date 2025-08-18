import datai from '$lib/components/main/data.json';
const baseUrl = import.meta.env.VITE_URL;
console.log(baseUrl)

export const load = async ({fetch}) => {
    let error, country,data

    const res =  fetch(baseUrl+'/graphql', {
      //api/cuntries?pagination[page]=1&pagination[pageSize]=280
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `query {
  cuntries {
    data{
      id
      attributes {name free_people{data{id
    }
    }
    } 
    }
}
}   `
      })
    })
      .then((data) => {
        return data.json();
      })
      .catch(() => {
        console.log(error);
        return error;
      });
   
  
 
 return {
   streamed: {
     data: new Promise((resolve) => {
       res
         .then((data) => {
          console.log("43",data)
          console.log("API Response:", data); // Added console.log to inspect the response
            country = data.data.cuntries.data;
            let total =0
            data = datai;
            for (let j = 0; j < country.length; j++) {
              for (let i = 0; i < data.length; i++) {
                if (data[i].name === country[j].attributes.name) {
                  data[i].agrees =
                    country[j].attributes.free_people.data.length;
                    total += country[j].attributes.free_people.data.length
                } else if (
                  (data[i].name === 'Palestine' && country[j].id === 167) ||
                  (data[i].name === 'Palestine' && country[j].id === 246)
                ) {
                  if (data[i].agrees > 0) {
                    data[i].agrees +=
                      country[j].attributes.free_people.data.length;
                      total += country[j].attributes.free_people.data.length
                  } else {
                    data[i].agrees =
                      country[j].attributes.free_people.data.length;
                      total += country[j].attributes.free_people.data.length
                  }
                } else if (
                  data[i].name === 'Russia' &&
                  country[j].attributes.name === 'Russian Federation'
                ) {
                  data[i].agrees =
                    country[j].attributes.free_people.data.length;
                    total += country[j].attributes.free_people.data.length
                } else if (
                  data[i].name === 'United States of America' &&
                  country[j].attributes.name === 'United States'
                ) {
                  data[i].agrees =
                    country[j].attributes.free_people.data.length;
                    total += country[j].attributes.free_people.data.length
                }
              }
            }
            data.total = total
            console.log(data,data.total);
           return resolve(data);
         })
         .catch((error) => {
           console.log(error);
         });
     })
   }
 };
};
