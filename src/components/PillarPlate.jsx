import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { COLORS } from "../constants/colors.js";
import { PILLARS } from "../data/content.js";

/** Diagrama radial (D3) dos 4 pilares do método — assinatura visual da página. */
export function PillarPlate() {
  const svgRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const size = 340;
    const radius = size / 2;
    const svg = d3.select(svgRef.current).attr("viewBox", `0 0 ${size} ${size}`).attr("width", "100%").attr("height", "100%");
    svg.selectAll("*").remove();

    const g = svg.append("g").attr("transform", `translate(${radius},${radius})`);
    const pie = d3.pie().value(1).padAngle(0.025).sort(null);
    const arc = d3.arc().innerRadius(radius * 0.42).outerRadius(radius * 0.92).cornerRadius(4);
    const arcs = pie(PILLARS);

    g.selectAll("path")
      .data(arcs)
      .join("path")
      .attr("d", arc)
      .attr("fill", (d) => d.data.color)
      .attr("stroke", COLORS.paper)
      .attr("stroke-width", 3)
      .style("cursor", "pointer")
      .style("transition", "d 300ms ease, opacity 300ms ease")
      .attr("opacity", (d, i) => (i === 0 ? 1 : 0.55))
      .attr("data-cursor", "link")
      .on("mouseenter", (event, d) => setActive(PILLARS.findIndex((p) => p.title === d.data.title)))
      .on("click", (event, d) => setActive(PILLARS.findIndex((p) => p.title === d.data.title)));

    g.append("text")
      .attr("text-anchor", "middle")
      .attr("y", -4)
      .attr("font-family", "'Archivo', sans-serif")
      .attr("font-size", 11)
      .attr("letter-spacing", "0.08em")
      .attr("fill", COLORS.ink)
      .attr("opacity", 0.55)
      .text("O MÉTODO");

    g.append("text")
      .attr("text-anchor", "middle")
      .attr("y", 16)
      .attr("font-family", "'Instrument Serif', serif")
      .attr("font-size", 22)
      .attr("fill", COLORS.ink)
      .text("4 pilares");
  }, []);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg
      .selectAll("path")
      .attr("opacity", (d, i) => (i === active ? 1 : 0.45))
      .attr("d", (d, i) => {
        const radius = 170;
        const inner = i === active ? radius * 0.4 : radius * 0.42;
        const outer = i === active ? radius * 0.99 : radius * 0.92;
        return d3.arc().innerRadius(inner).outerRadius(outer).cornerRadius(4)(d);
      });
  }, [active]);

  return (
    <div className="pillar-grid">
      <svg ref={svgRef} style={{ overflow: "visible" }} />
      <div>
        {PILLARS.map((p, i) => (
          <button
            key={p.title}
            data-cursor="link"
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className="pillar-btn"
            style={{ opacity: active === i ? 1 : 0.55 }}
          >
            <span className="pillar-dot" style={{ background: p.color }} />
            <span>
              <span className="pillar-title">{p.title}</span>
              <span className="pillar-text">{p.text}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
