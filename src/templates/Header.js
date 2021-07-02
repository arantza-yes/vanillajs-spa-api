const Header = () => {
  const view = `
    <div class="bg-gray-900 h-16">
        <div class="h-full flex justify-between items-center container m-auto">
            <div class="">
                <a class="text-white text-2xl font-bold tracking-widest" href="/">
                    Rick and Morty
                </a>
            </div>
            <div class="">
                <a class="text-white" href="#/about">
                    About
                </a>
            </div>
        </div>
    </div>`;
  return view;
};

export default Header;
