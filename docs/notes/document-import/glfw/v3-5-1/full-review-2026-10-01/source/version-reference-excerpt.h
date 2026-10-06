/*! @brief Retrieves the version of the GLFW library.
 *
 *  This function retrieves the major, minor and revision numbers of the GLFW
 *  library.  It is intended for when you are using GLFW as a shared library and
 *  want to ensure that you are using the minimum required version.
 *
 *  Any or all of the version arguments may be `NULL`.
 *
 *  @param[out] major Where to store the major version number, or `NULL`.
 *  @param[out] minor Where to store the minor version number, or `NULL`.
 *  @param[out] rev Where to store the revision number, or `NULL`.
 *
 *  @errors None.
 *
 *  @remark This function may be called before @ref glfwInit.
 *
 *  @thread_safety This function may be called from any thread.
 *
 *  @sa @ref intro_version
 *  @sa @ref glfwGetVersionString
 *
 *  @since Added in version 1.0.
 *
 *  @ingroup init
 */
GLFWAPI void glfwGetVersion(int* major, int* minor, int* rev);

/*! @brief Returns a string describing the compile-time configuration.
 *
 *  This function returns the compile-time generated
 *  [version string](@ref intro_version_string) of the GLFW library binary.  It describes
 *  the version, platforms, compiler and any platform or operating system specific
 *  compile-time options.  It should not be confused with the OpenGL or OpenGL ES version
 *  string, queried with `glGetString`.
 *
 *  __Do not use the version string__ to parse the GLFW library version.  The
 *  @ref glfwGetVersion function provides the version of the running library
 *  binary in numerical format.
 *
 *  __Do not use the version string__ to parse what platforms are supported.  The @ref
 *  glfwPlatformSupported function lets you query platform support.
 *
 *  @return The ASCII encoded GLFW version string.
 *
 *  @errors None.
 *
 *  @remark This function may be called before @ref glfwInit.
 *
 *  @pointer_lifetime The returned string is static and compile-time generated.
 *
 *  @thread_safety This function may be called from any thread.
 *
 *  @sa @ref intro_version
 *  @sa @ref glfwGetVersion
 *
 *  @since Added in version 3.0.
 *
 *  @ingroup init
 */
GLFWAPI const char* glfwGetVersionString(void);
