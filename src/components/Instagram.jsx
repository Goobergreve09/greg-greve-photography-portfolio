

const Instagram = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          {/* LightWidget WIDGET @ https://lightwidget.com/*/}
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
          <iframe
            src="//lightwidget.com/widgets/29c399587c52584db30cd4f13cbf0e2a.html"
          scrolling="no"
            allowTransparency="true"
            className="lightwidget-widget"
            style={{ width: '600px', height:"400px", border: 0}}
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Instagram;


