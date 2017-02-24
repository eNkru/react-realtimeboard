import React, {PropTypes} from 'react';

const AgencyCard = ({agency}) => {
  const {agency_id, agency_name, agency_phone} = agency;
  return (
    <div className="col-xs-6 col-md-4">
      <div className="thumbnail">
        <div className="caption">
          <h3>{agency_name}</h3>
          <p>Phone: {agency_phone}</p>
          <p>
            <a href="#" className="btn btn-primary" role="button">{agency_id}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

AgencyCard.propTypes = {
  agency: PropTypes.object.isRequired
};

export default AgencyCard;
