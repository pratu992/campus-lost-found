function AuthLayout({ backgroundImage, leftContent, children }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/75"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 lg:px-20">

        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="hidden lg:flex justify-center">
            {leftContent}
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            {children}
          </div>

        </div>

      </div>
    </div>
  );
}

export default AuthLayout;