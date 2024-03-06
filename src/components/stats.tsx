import ShorternLink from './shortern-link-section';
import AdvanceStat from './advance-stat';

export default function Stats() {
  return (
    <div className="bg-neutral-gray_text  p-5">
      <section className=" container py-5">
        <ShorternLink />
      </section>
      <AdvanceStat />
    </div>
  );
}
