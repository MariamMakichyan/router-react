function GalleryCards({photos}) {
  return (
    <>
      {photos.map((photos) => (
        <div key={photos.id} className="gallery-card">
          <img src={photos.url} alt={photos.title} />
          <div className="gallery-card-title">{photos.title}</div>
          <div className="gallery-card-footer">
            <span>Album ID: {photos.albumId}</span>
            <span>Photo ID: {photos.id}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default GalleryCards ;
