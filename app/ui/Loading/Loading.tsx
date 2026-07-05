export const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center rounded-custom bg-white/70">
      <span
        className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-secondary"
        aria-hidden="true"
      />
    </div>
  );
};
