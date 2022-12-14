export interface IEducation {
  institute: string;
  time: string;
  degree: string;
  major: string;
  descriptions: Array<string>;
}

export interface IEducations {
  educations: Array<IEducation>;
}

export const Educations: React.FC<IEducations> = ({ educations }) => {
  return (
    <>
      {educations.map(({ institute, time, degree, major, descriptions }) => {
        return (
          <div className="info-box" key={institute}>
            <h3>{institute}</h3>
            <span>{time}</span>
            <p>{`${degree} in ${major}`}</p>
            <ul>
              {descriptions.map((description, i) => (
                <li key={description[i]}>{description}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};
