// turn integer into basic beat
const library = {
  dembow_riddim: 37416
}

const int_to_pattern = (input) => input.toString(2).split('').map(Number)
const selected_beat = int_to_pattern(library.dembow_riddim)
console.log(selected_beat)

$: n(1)
  .scale("C3:major")
//   .sound("piano")
  .sound("bd")
  .bank("RolandTR909")
  .struct(selected_beat)
  .spiral({ steady: 0.8 })

// turn pattern into polyrithm
$: s("bd ~ hh [~ bd]")
  ._punchcard()

$: note("c3 d3 f3 g3")
  .sound("piano")
  ._punchcard()
