/* eslint-disable import/prefer-default-export */
export const handleEthBalance = (balances = []) => {
  const ethDepositedList = balances.map(({ ethDeposited }) => parseFloat(ethDeposited));
  const ethWithdrawnList = balances.map(({ ethWithdrawn }) => parseFloat(ethWithdrawn));

  const totalEthDeposited = ethDepositedList.reduce((a, b) => a + b, 0);
  const totalEthWithdrawn = ethWithdrawnList.reduce((a, b) => a + b, 0);

  const ethBalance = totalEthDeposited - totalEthWithdrawn;

  if (ethBalance > 0) {
    return ethBalance;
  }

  return 0;
};
