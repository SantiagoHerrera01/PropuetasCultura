export async function getDepartments() {
    try {
      let response = await fetch(
        `https://be48sfzilf.execute-api.us-east-1.amazonaws.com/dev/comfama/common/api/v1/departments`
      );
      let data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error al cargar los datos", error);
      throw error;
    }
  }