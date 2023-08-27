import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      profileImages: [
        'profile Image 1.png',
        'profile Image 2.png',
        'profile Image 3.png',
        'profile Image 4.png'
      ],
      selectedProfileImage: '' 
    };
  }

  handleImageChange = (event) => {
    this.setState({ selectedProfileImage: event.target.value });
  }

  render() {
    const { profileImages, selectedProfileImage } = this.state;

    return (
      <div className="App">
        <form id="payroll-form" className="payroll-form">
          {/* ... other form fields ... */}
          <div className="form-group">
            <label htmlFor="profile-pic">Profile Picture</label>
            <select
              id="profile-pic"
              name="profile-pic"
              value={selectedProfileImage}
              onChange={this.handleImageChange}
              className="input-select"
            >
              <option value="">Select a Profile Picture</option>
              {profileImages.map((image, index) => (
                <option key={index} value={image}>
                  {image}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default Profile;
