import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { GET_GALLERY } from '../../actions/types'

class Gallery extends Component {

  componentDidMount() {
    this.props.getGallery();
  }

  render() {
    const { gallery } = this.props;
    return (
      <div class="section-inner-wrapper">
        <h1>Gallery</h1>
        {
          gallery.map( gallery =>(
            <div className={gallery.album_id}>
              <p>{gallery.album_name}</p>
              <img src={gallery.album_images[0].image_thumb_path} />
            </div>
          ))
        }
      </div>
    )
  }
}

Gallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  getGallery: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  gallery: state.gallery.gallery
});

const mapDispatchToProps = (dispatch) => ({
  getGallery: () => dispatch({type: GET_GALLERY})
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
