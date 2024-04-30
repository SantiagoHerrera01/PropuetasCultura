import { useEffect, useState } from "react";
import { getMunicipalities } from "../services/municipalities.services";
import ProgressBarForm from "./progress";
import { getDepartments } from "../services/departments.services";
import { useRegFormContext } from "./RegFormProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// interface Municipality {
//   id: string;
//   name: string;
// }

// interface Department {
//   id: string;
//   name: string;
// }

interface options{
  id: string;
  name: string;
}

export default function ProposalDetails() {
  const [departments, setDepartments] = useState<options[]>([]);
  const [municipalities, setMunicipalities] = useState<options[]>([]);
  const [entidadesAliadas, setEntidadesAliadas] = useState<string>("");

  const [,dispatch]= useRegFormContext();
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { isValid } } = useForm<FormData>();

  const onSubmit=(values:any)=>{
    if(isValid){
      dispatch({type:'SET_PROPOSALDETAILS_DATA',data:values})
      navigate('/consideration')
    }
  }

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await getDepartments();
        setDepartments(data);
      } catch (error) {
        console.error("Error al obtener los departamentos:", error);
      }
    };
    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchMunicipalities = async () => {
      const data = await getMunicipalities();
      setMunicipalities(data);
    };
    fetchMunicipalities();
  }, []);

  const handleEntidadesAliadasChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEntidadesAliadas(e.target.value);
  };

  return (
    <>
      <form action="" className="formUserData" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="formUserData__title">Propuesta</h2>
        <div className="progressBar__space">
          <ProgressBarForm porcentage={40} />
        </div>
        <div className="proposal-space">
          <div className="proposal-space-name">
            <div>
              <label htmlFor="" className="label">
                Nombre evento:
              </label>
              <input
                type="text"
                className="proposal-input"
                placeholder=" Nombre evento"
              />
            </div>
            <div>
              <label htmlFor="" className="label">
                Fecha del Evento:
              </label>
              <input className="proposal-input" type="date" />
            </div>
          </div>
          <div className="proposal-space-inline">
            <div>
              <label htmlFor="" className="label">
                Departamento:
              </label>
              <select className="proposal-input" name="" id="">
                <option value="" disabled selected>
                  Seleccione...
                </option>
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="" className="label">
                Municipio:
              </label>
              <select className="proposal-input" name="" id="">
                <option value="" disabled selected>
                  Seleccione...
                </option>
                {municipalities.map((municipality) => (
                  <option key={municipality.id} value={municipality.id}>
                    {municipality.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="" className="label">
                Area Encargada:
              </label>
              <select className="proposal-input" name="" id="">
                <option value="" disabled selected>
                  Seleccione...
                </option>
              </select>
            </div>
          </div>
          <div className="proposal-space-inline">
            <div>
              <label htmlFor="" className="label">
                Publico Beneficiado:
              </label>
              <input
                type="text"
                className="proposal-input"
                placeholder=" Publico Beneficiado"
              />
            </div>
            <div>
              <label htmlFor="" className="label">
                Entidades Aliadas:
              </label>
              <select
                className="proposal-input"
                name=""
                id=""
                value={entidadesAliadas}
                onChange={handleEntidadesAliadasChange}
              >
                <option value="" disabled selected>
                  Seleccione...
                </option>
                <option value="No">No</option>
                <option value="Si">Si</option>
              </select>
            </div>
            {entidadesAliadas === "Si" && (
              <div>
                <label htmlFor="" className="label">
                  Nombre Entidad Aliada
                </label>
                <input
                  type="text"
                  className="proposal-input"
                  placeholder=" Nombre Entidad"
                />
              </div>
            )}
          </div>
          <div>
            <label htmlFor="" className="label">
              Descripcion Propuesta:
            </label>
            <p className="information-text">
              {" "}
              presentación sobre la propuesta.
            </p>
            <textarea
              className="proposal-textarea"
              name=""
              id=""
              cols={30}
              rows={5}
            ></textarea>
          </div>
          <div>
            <label htmlFor="" className="label">
              Actividades del Evento:
            </label>
            <p className="information-text">
              Diligencie las actividades del evento.
            </p>
            <textarea
              className="proposal-textarea"
              name=""
              id=""
              cols={30}
              rows={5}
            ></textarea>
          </div>
          <div>
            <label htmlFor="" className="label">
              Trayectoria:
            </label>
            <p className="information-text">
              De qué manera impacta y transforma el territorio donde se
              desarrolla.
            </p>
            <textarea
              className="proposal-textarea"
              name=""
              id=""
              cols={30}
              rows={5}
            ></textarea>
          </div>
        </div>
        <div className="button__position">
          <input type="submit" className="sendButton" value={"Siguiente"} />
        </div>
      </form>
    </>
  );
}