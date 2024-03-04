type CWDetails = {
  containetClass?: string;
  parameter?: string;
  parameterClass?: string;
  parameterVal?: string | number;
  parameterValClass?: string;
  parameterUnit?: string;
  parameterUnitClass?: string;
};
export const CWDetails = (props: CWDetails) => {
  return (
    <div className={props.containetClass}>
      {props.parameter && (
        <span className={props.parameterClass}>{props.parameter}</span>
      )}
      {props.parameterVal && (
        <span className={props.parameterValClass}>{props.parameterVal}</span>
      )}
      {props.parameterUnit && (
        <span className={props.parameterUnitClass}>{props.parameterUnit}</span>
      )}
    </div>
  );
};
