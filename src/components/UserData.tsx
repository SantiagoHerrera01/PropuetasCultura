import { useNavigate } from "react-router-dom";
import { useRegFormContext } from "./RegFormProvider.tsx";
import ProgressBarForm from "./progress.tsx";
import { useForm } from "react-hook-form";

type FormData = {
  nombreProponente: string;
  nombres: string;
  apellidos: string;
  tipoDocumento:options
  numeroDocumento:string
  telefonoFijo: number
  telefonoCelular: number
  correo: string;
  
};
type options ={
CC:string
CE:string
NIT:string
}

const UserData = () => {

  // const { currentStep, goToStep, nextStep, prevStep } = useSteps({ stepsNumber: 4 })

  const [,dispatch]= useRegFormContext();
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { isValid } } = useForm<FormData>();

  const onSubmit=(values:any)=>{
    if(isValid){
      dispatch({type:'SET_USERDATA_DATA',data:values})
      navigate('/proposalDetails')
    }
  }

  return (
    <>
      <form className="formUserData" onSubmit={handleSubmit(onSubmit)}>

        {/* <Stepper current={currentStep}>
          <Stepper.Step key={1}> */}
            <h2 className="formUserData__title">Datos Principales</h2>
            <div className="progressBar__space">
              <ProgressBarForm porcentage={0}/>
            </div>
            <div className="input--space">


              <label htmlFor="">Nombre Proponente: </label>
              <div>
                <p className="information-text">Nombre organizacion o persona a cargo</p>
                <input type="text" className="inputForm" placeholder="Nombre proponente" required {...register('nombreProponente')}/>

              </div>
            </div>

            <div className="formUserData__spaceName">
              <div>
                <label htmlFor="" >Nombres: </label>
                <div>
                  <input type="text" className="inputForm inputForm--size" placeholder=' Nombres' required {...register('nombres')}/>
                </div>
              </div>

              <div>
                <label htmlFor="">Apellidos: </label>
                <div>
                  <input type="text" className="inputForm inputForm--size" placeholder=" Apellidos"required {...register('apellidos')}/>
                </div>
              </div>
            </div>
            <div className="formUserData__Space">
              <div>
                <label htmlFor="">Tipo Documento: </label>
                <div>
                  <select className="inputForm" required {...register('tipoDocumento')}>
                    <option value="" disabled selected>Seleccionar...</option>
                    <option value="">CC</option>
                    <option value="">CE</option>
                    <option value="">NIT</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="">Numero Documento: </label>
                <div>
                  <input type="text" className="inputForm" placeholder=" Numero Documento" required {...register('numeroDocumento')}/>
                </div>
              </div>
              <div>
                <label htmlFor="">Telefono Fijo: </label>
                <div>
                  <input type="text" className="inputForm" placeholder=" Telefono Fijo" required {...register('telefonoFijo')}/>
                </div>
              </div>
              <div>
                <label htmlFor="">Telefono Celular: </label>
                <div>
                  <input type="text" className="inputForm" placeholder=" Celular" required {...register('telefonoCelular')} />
                </div>
              </div>
              <div>
                <label htmlFor="">Correo: </label>
                <div>
                  <input type="Email" className="inputForm" placeholder=" Correo"required {...register('correo')}/>
                </div>
              </div>

            </div>
            <div className="button__position">
              <input type="submit" className="sendButton" value={"Siguiente"} />
            </div>
          {/* </Stepper.Step>
        </Stepper> */}




      </form>
    </>
  )
}

export default UserData
