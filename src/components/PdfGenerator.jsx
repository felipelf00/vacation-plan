import {
  PDFViewer,
  Document,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import { useContext } from "react";
import PlanContext from "./PlanContext";
import { useParams } from "react-router-dom";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 40,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 10,
  },
  centerText: {
    textAlign: "center",
  },
});

const PdfGenerator = () => {
  const { plans } = useContext(PlanContext);

  const { id } = useParams();
  const plan = plans.find((element) => element._id === id);

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={[styles.section, styles.centerText]}>
            {plan?.title || ""}
          </Text>
          <Text style={styles.title}>From: {plan?.startDate || ""}</Text>

          <Text style={styles.title}>Until: {plan?.endDate || ""}</Text>

          <Text style={styles.title}>Location: {plan?.location || ""}</Text>

          <Text style={styles.title}>
            Participants: {plan?.participants || ""}
          </Text>

          <Text style={styles.title}>
            Description: {plan?.description || ""}
          </Text>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfGenerator;
