// 固定glfw3.h 原文行 1991-2016
 *  @since Added in version 3.0.
 *
 *  @ingroup monitor
 */
typedef void (* GLFWmonitorfun)(GLFWmonitor* monitor, int event);

/*! @brief The function pointer type for joystick configuration callbacks.
 *
 *  This is the function pointer type for joystick configuration callbacks.
 *  A joystick configuration callback function has the following signature:
 *  @code
 *  void function_name(int jid, int event)
 *  @endcode
 *
 *  @param[in] jid The joystick that was connected or disconnected.
 *  @param[in] event One of `GLFW_CONNECTED` or `GLFW_DISCONNECTED`.  Future
 *  releases may add more events.
 *
 *  @sa @ref joystick_event
 *  @sa @ref glfwSetJoystickCallback
 *
 *  @since Added in version 3.2.
 *
 *  @ingroup input
 */
typedef void (* GLFWjoystickfun)(int jid, int event);

// 固定glfw3.h 原文行 5634-5664

/*! @brief Returns the name of the specified joystick.
 *
 *  This function returns the name, encoded as UTF-8, of the specified joystick.
 *  The returned string is allocated and freed by GLFW.  You should not free it
 *  yourself.
 *
 *  If the specified joystick is not present this function will return `NULL`
 *  but will not generate an error.  This can be used instead of first calling
 *  @ref glfwJoystickPresent.
 *
 *  @param[in] jid The [joystick](@ref joysticks) to query.
 *  @return The UTF-8 encoded name of the joystick, or `NULL` if the joystick
 *  is not present or an [error](@ref error_handling) occurred.
 *
 *  @errors Possible errors include @ref GLFW_NOT_INITIALIZED, @ref
 *  GLFW_INVALID_ENUM and @ref GLFW_PLATFORM_ERROR.
 *
 *  @pointer_lifetime The returned string is allocated and freed by GLFW.  You
 *  should not free it yourself.  It is valid until the specified joystick is
 *  disconnected or the library is terminated.
 *
 *  @thread_safety This function must only be called from the main thread.
 *
 *  @sa @ref joystick_name
 *
 *  @since Added in version 3.0.
 *
 *  @ingroup input
 */
GLFWAPI const char* glfwGetJoystickName(int jid);

// 固定glfw3.h 原文行 5732-5755

/*! @brief Returns the user pointer of the specified joystick.
 *
 *  This function returns the current value of the user-defined pointer of the
 *  specified joystick.  The initial value is `NULL`.
 *
 *  This function may be called from the joystick callback, even for a joystick
 *  that is being disconnected.
 *
 *  @param[in] jid The joystick whose pointer to return.
 *
 *  @errors Possible errors include @ref GLFW_NOT_INITIALIZED.
 *
 *  @thread_safety This function may be called from any thread.  Access is not
 *  synchronized.
 *
 *  @sa @ref joystick_userptr
 *  @sa @ref glfwSetJoystickUserPointer
 *
 *  @since Added in version 3.3.
 *
 *  @ingroup input
 */
GLFWAPI void* glfwGetJoystickUserPointer(int jid);

// 固定glfw3.h 原文行 5786-5795
 *
 *  This function sets the joystick configuration callback, or removes the
 *  currently set callback.  This is called when a joystick is connected to or
 *  disconnected from the system.
 *
 *  For joystick connection and disconnection events to be delivered on all
 *  platforms, you need to call one of the [event processing](@ref events)
 *  functions.  Joystick disconnection may also be detected and the callback
 *  called by joystick functions.  The function will then return whatever it
 *  returns if the joystick is not present.
