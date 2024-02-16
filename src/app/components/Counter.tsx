import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { increment, decrement, incrementByAmount } from '../services/slice/counterSlice';

function Counter() {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      </div>
    </div>
  );
}

export default Counter;
