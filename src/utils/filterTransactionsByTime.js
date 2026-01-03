export const filterTransactionsByTime = (txs, range) => {
  const now = Date.now();

  const ranges = {
    day: 1,
    week: 7,
    month: 30,
    all: Infinity,
  };

  const days = ranges[range] ?? 7;
  const cutoff = now - days * 24 * 60 * 60 * 1000;

  return txs.filter((tx) => new Date(tx.block_signed_at).getTime() >= cutoff);
};
