import "./timer-skeleton.css";

export default function TimerSkeleton() {
  return (
    <div className="skeleton-wrapper">
      <SkeletonTitle gridArea={"title"} />
      <SkeletonUnit gridArea={"days"} />
      <SkeletonLabel gridArea={"lab1"} />
      <SkeletonSeparator gridArea={"sep1"} />
      <SkeletonUnit gridArea={"minutes"} />
      <SkeletonLabel gridArea={"lab3"} />
      <SkeletonSeparator gridArea={"sep2"} />
      <SkeletonUnit gridArea={"hours"} />
      <SkeletonLabel gridArea={"lab5"} />
      <SkeletonSeparator gridArea={"sep3"} />
      <SkeletonUnit gridArea={"seconds"} />
      <SkeletonLabel gridArea={"lab7"} />
    </div>
  );
}

function SkeletonTitle({ ...props }) {
  return (
    <div
      className="skeleton-title"
      style={{
        gridArea: props.gridArea,
      }}
    ></div>
  );
}

function SkeletonUnit({ ...props }) {
  return (
    <div
      className="skeleton-unit"
      style={{
        gridArea: props.gridArea,
      }}
    ></div>
  );
}

function SkeletonLabel({ ...props }) {
  return (
    <div
      className="skeleton-label"
      style={{
        gridArea: props.gridArea,
      }}
    ></div>
  );
}

function SkeletonSeparator({ ...props }) {
  return (
    <div
      className="skeleton-separator"
      style={{
        gridArea: props.gridArea,
      }}
    >
      <span>:</span>
    </div>
  );
}
