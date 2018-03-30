function move (index, from, to) {
  console.log(`move ${index} from ${from} to ${to}.`);
}

function hanoi (num, from, to, help) {
  if (num === 1) {
    move(num, from, to);
    return;
  }

  hanoi(num - 1, from, help, to);
  move(num, from, to);
  hanoi(num - 1, help, to, from);
}

module.exports = hanoi;