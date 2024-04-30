import ProgressBar from 'react-bootstrap/ProgressBar';


type ProgressProps = React.ComponentProps<"progress"> & {
  porcentage: number;
  className?: string;
};

function ProgressBarForm(props:ProgressProps) {

  
  return (
    <ProgressBar now={props.porcentage} animated label={`${props.porcentage}%`} />
  );
}

export default ProgressBarForm;