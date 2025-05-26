import React from 'react';

export default function AssistantCard({ avatar, name, handle, description }) {
  return (
    <div className="box" style={{ width: '300px' }}>
      <figure className="image is-4by3">
        <img src={avatar} alt={name} />
      </figure>
      <div className="content" style={{ borderTop: '1px solid #000', paddingTop: '8px', textAlign: 'cent' }}>
        <p className="title is-3">{name}</p>
        <p className="subtitle is-5 mt-1" style={{ marginTop: '-10px', marginBottom: '10px' }}>
          @{handle}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
