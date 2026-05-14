import { useEffect, useState } from "react";

function Ticker() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("Detecting...");

  // LIVE TIME + DATE
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // LOCATION (Geolocation API)
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
        )
          .then((res) => res.json())
          .then((data) => {
            setLocation(data.city + ", " + data.countryName);
          });
      },
      () => {
        setLocation("Location access denied");
      }
    );
  }, []);

  return (
    <div style={styles.container}>
      <p style={styles.item}>
        📅 Date: {time.toLocaleDateString()}
      </p>

      <p style={styles.item}>
        ⏰ Time: {time.toLocaleTimeString()}
      </p>

      <p style={styles.item}>
        📍 Location: {location}
      </p>
    </div>
  );
}

export default Ticker;

const styles = {
  container: {
    padding: "10px",
    background: "#111827",
    color: "white",
    borderRadius: "10px",
    textAlign: "center",
    margin: "10px"
  },
  item: {
    margin: "5px 0"
  }
};