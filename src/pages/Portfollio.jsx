import Education from "../components/Education";
import PersonalInformation from "../components/PersonalInformation";
import SpecialSkills from "../components/SpecialSkills";
import TrainingCertification from "../components/TrainingCertification";
import WorkingExperience from "../components/WorkingExperience";

export default function Portfollio() {
  return (
    <>
      <PersonalInformation />
      <Education />
      <SpecialSkills />
      <TrainingCertification />
      <WorkingExperience />
    </>
  );
}
