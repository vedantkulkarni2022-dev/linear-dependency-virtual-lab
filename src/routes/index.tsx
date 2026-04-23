import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Linear Dependence Calculator - Virtual Lab" },
      {
        name: "description",
        content:
          "Interactive virtual lab for testing linear dependence and independence of vectors with step-by-step Gaussian elimination and characteristic-equation simulation.",
      },
    ],
  }),
});

function Index() {
  return (
    <iframe
      src="/lab.html"
      title="Linear Dependence Calculator Virtual Lab"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
