export default Notification = ({ children, $class }) => {
  return <p className={'alert ' + $class}>{children}</p>
}
