import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { postUser } from '../services/slice/reqresSlice';

const UserComponente = () => {
  const dispatch = useDispatch<any>(); // gambiarra
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const loading = useSelector((state: RootState) => state.reqres.loading);
  const error = useSelector((state: RootState) => state.reqres.error);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(postUser({ name, job }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Cargo" value={job} onChange={(e) => setJob(e.target.value)} />
        <button type="submit" disabled={loading}>Submit</button>
      </form>
      {loading && <p>Carregando...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default UserComponente;
