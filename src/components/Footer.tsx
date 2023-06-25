const Footer = () => {
  return (
    <footer className="h-52 border-t border-black p-2">
      <select className="border border-black mb-4 font-noto-sans-georgian">
        <option value="en">English</option>
        <option value="en">French</option>
        <option value="en">Spanish</option>
        <option value="en">Hindi</option>
        <option value="en">Malayalam</option>
      </select>
      <div className="font-domine w-fit underline hover:no-underline cursor-pointer">
        Back to top
      </div>
      <div className="container mx-auto px-2">
        <div className="text-center mt-8 font-noto-sans-georgian">
          The Morning Post &copy; 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
