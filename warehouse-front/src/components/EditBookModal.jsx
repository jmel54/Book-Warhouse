import React from 'react';
import '../styles/EditBookModal.css'

const EditBookModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <input type="text" placeholder="Genre" />
        <textarea placeholder="Description"></textarea>
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditBookModal;