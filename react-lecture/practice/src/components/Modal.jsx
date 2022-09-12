const Modal = ({ setViewModal }) => {
  const changeModalState = () => {
    setViewModal(false)
  }
  return (
    <div>
      <div>내용이 없습니다</div>
      <button onClick={changeModalState}>닫기</button>
    </div>
  )
}
export default Modal
