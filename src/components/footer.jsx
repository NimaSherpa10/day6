function Footer() {
  return (
    <div className="h-12 bg-blue-400 flex justify-center">
      <div className="text-white text-center">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </div>
    </div>
  );
}

export default Footer;
