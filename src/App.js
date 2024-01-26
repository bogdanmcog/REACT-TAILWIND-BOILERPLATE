function App() {
  const imagesTopic = ["mountains", "nature", "summer", "space"];
  const titles = [
    "In the arms of God",
    "Wiseblood",
    "Deliverance",
    "America's volume dealer",
  ];
  const subTitles = [
    "Innovation distinguishes between a leader and a follower.",
    "Don't be afraid to give up the good to go for the great.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
  ];
  return (
    <div className="grid min-h-screen place-items-center">
      <ul className="flex w-full max-w-6xl gap-4">
        {/* When it comes to height, with CSS Grid and the fr fractional units you can animate the height of an element from zero to the height it needs to be.
         For the fluid width, use Flexbox. Using flex-1 on an item enables it to grow and shrink as needed while taking up the available space provided by the 
         parent. Then when using hover:grow-[1.25] on the card, it will grow to 1.25 times its initial size, causing the other cards to shrink.*/}
        {[...Array(4).keys()].map((el) => (
          <li
            className="group relative h-[500px] w-full flex-1 overflow-hidden rounded-2xl bg-blue-100 transition-all hover:grow-[1.5]"
            key={el}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={`https://source.unsplash.com/random?${imagesTopic[el]}`}
              alt=""
            />
            <div className="from-30% absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 p-4">
              <div className="w-64">
                <h2 className="text-2xl font-medium text-white">
                  {titles[el]}
                </h2>

                {/* hide and reveal text on hover with grid and fr units*/}
                <div className="grid grid-rows-[0fr] transition-all  group-hover:grid-rows-[1fr]">
                  <p className="mt-2 overflow-hidden text-white/70 opacity-0 transition duration-300 group-hover:opacity-100">
                    {subTitles[el]}
                  </p>
                </div>
              </div>
              {/* hide and reveal text on hover with height 0 */}
              {/* <p className="mt-2 h-0 overflow-hidden text-white/70 transition-all group-hover:h-[100px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                quia ipsa eius.
              </p> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
