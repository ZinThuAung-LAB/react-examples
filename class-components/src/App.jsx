import FunctionalInput from './components/FunctionalInput';
import ClassInput from './components/ClassInput';
import './style.css';

export default function App() {
  return (
    <>
      <FunctionalInput name="Functional Component Test!" />
      <div className="divider" />
      <ClassInput name="Class based component!" />
    </>
  );
}
