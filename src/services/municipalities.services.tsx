export async function getMunicipalities(){
    let response= await fetch(`https://be48sfzilf.execute-api.us-east-1.amazonaws.com/dev/comfama/common/api/v1/municipalities`)
    let data = await response.json()
    return data.data;
}