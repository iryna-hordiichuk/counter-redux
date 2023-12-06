import {useSelector} from  "react-redux";

export const Balance = () => {
    const currentBalance = useSelector(state => state.account.balance);
  // subscribtion
  return (
    <div>
      <b>Balance: {currentBalance}</b>
    </div>
  );
};
