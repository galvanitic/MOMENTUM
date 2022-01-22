import * as React from 'react';
import { display } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { ReactComponentElement } from 'react-transition-group/node_modules/@types/react';
import { create } from '@mui/material/styles/createTransitions';

interface IProjectTrackerProps {
}
interface Column {
  id: 'number' | 'equivalency' | 'goal' | 'code' | 'title' | 'status';
  label: string;
  minWidth?: number;
}
interface Data {
  number: number,
  equivalency: string,
  goal: string,
  code: string,
  title: string,
  status?: string
}
const columns: readonly Column[] = [
  { id: 'number', label: '', minWidth: 120 },
  { id: 'equivalency', label: 'Course Equivalency', minWidth: 150 },
  { id: 'goal', label: 'Goal', minWidth: 250 },
  { id: 'code', label: 'Competency Code', minWidth: 250 },
  { id: 'title', label: 'Project Title', minWidth: 250 },
  { id: 'status', label: 'Status', minWidth: 10 },
];
function createData(
  number: number,
  equivalency: string,
  goal: string,
  code: string,
  title: string,
  status?: string
): Data {
  return { number, equivalency, goal, code, title, status};
}
const rows = [
  createData(1, "IDS-101", "Productivity, Collaboration, and Civic Engagement",	"IDS-10006", "Planning and Goal-Setting"),
  createData(2, "IDS-101", "Productivity, Collaboration, and Civic Engagement",	"SCS-20004", "Influence of Culture"),
  createData(3, "IDS-101", "Productivity, Collaboration, and Civic Engagement",	"SCS-20005",	"Civic Engagement Opportunities"),
  createData(4, "SNHU-107", "Approaching Complex Challenges", "ENG-10001",	"Select Information"),
  createData(5, "SNHU-107", "Approaching Complex Challenges", "COM-10002",	"Present Information"),
  createData(6, "SNHU-107", "Approaching Complex Challenges", "SCS-10003",	"Problem-Solving Methods"),
  createData(7, "ENG-122", "Crafting Your Message",	"ENG-10007",	"Conclusions from Text"),
  createData(8, "ENG-122", "Crafting Your Message",	"ENG-10008",	"Craft Written Messages"),
  createData(9, "ENG-122", "Crafting Your Message",	"ENG-10009",	"Writing Conventions"),
  createData(10, "HUM-101", "Identity and Decision Making",	"PHL-20010",	"Ethical Decisions"),
  createData(11, "HUM-101", "Identity and Decision Making",	"PHL-10011",	"Identity and Values"),
  createData(12, "HUM-101", "Identity and Decision Making",	"HUM-20012",	"Creativity and Culture"),
  createData(13, "MAT-125", "Using Data to Inform Decisions",	"MAT-20013",	"Basic Quantitative Methods"),
  createData(14, "MAT-125", "Using Data to Inform Decisions",	"MAT-20014",	"Spreadsheet Applications"),
  createData(15, "MAT-125", "Using Data to Inform Decisions",	"SCS-20015",	"Human Behavior"),
  createData(16, "SCS-101", "Leadership and Group Dynamics",	"COM-10016",	"Feedback in Decision-Making"),
  createData(17, "SCS-101", "Leadership and Group Dynamics",	"OL-20017",	"Collaboration and Leadership"),
  createData(18, "SCS-101", "Leadership and Group Dynamics",	"SCS-20018",	"Group Interactions"),
  createData(19, "HIS-100", "Perspectives on People and Society",	"SCS-20019",	"Culture and Society"), 
  createData(20, "HIS-100", "Perspectives on People and Society",	"HIS-20020",	"Shaping Current Circumstances"), 
  createData(21, "HIS-100", "Perspectives on People and Society",	"HIS-20021",	"Worldviews"), 
  createData(22, "HIS-200", "Research, Analysis, and Cultural Study",	"HUM-20022",	"Dimensions of Culture"),
  createData(23, "HIS-200", "Research, Analysis, and Cultural Study",	"HIS-20023",	"Historical Inquiry"),
  createData(24, "HIS-200", "Research, Analysis, and Cultural Study",	"IDS-20024",	"Professional Practice"),
  createData(25, "SCS-201", "Science, Technology, and Society",	"SCS-20025", "Cross-Cultural Perspectives"),
  createData(26, "SCS-201", "Science, Technology, and Society",	"SCI-20026", "Practical Science"),
  createData(27, "SCS-201", "Science, Technology, and Society",	"PHL-20027", "Ethical Science and Technology"),
  createData(28, "HUM-200", "Communicating to Diverse Audiences",	"COM-20028", "Verbal Communication"),
  createData(29, "HUM-200", "Communicating to Diverse Audiences",	"COM-20029", "Cross-Cultural Communication"),
  createData(30, "HUM-200", "Communicating to Diverse Audiences",	"HUM-20030", "Culture and Context"),
  createData(31, "ENG-123", "Building Your Argument",	"ENG-20031",	"Persuasive Arguments"),
  createData(32, "ENG-123", "Building Your Argument",	"ENG-20032",	"Assumptions and Biases"),
  createData(33, "ENG-123", "Building Your Argument",	"ENG-20033",	"Analyze Ideas in Text"),
  createData(34, "SCI-200", "Issues of the Information Age",	"SCI-20034",	"Natural Sciences Methodologies"),
  createData(35, "SCI-200", "Issues of the Information Age",	"COM-20035",	"Deconstruct Media Messages"),
  createData(36, "SCI-200", "Issues of the Information Age",	"SCI-20036",	"Influence of Technology"),
  createData(37, "SCI-101", "Preparing Recommendations for Complex Challenges",	"MAT-20037",	"Solve Problems with Math"),
  createData(38, "SCI-101", "Preparing Recommendations for Complex Challenges",	"SCI-20038",	"Logical Reasoning"),
  createData(39, "SCI-101", "Preparing Recommendations for Complex Challenges",	"IDS-20039",	"Innovative Solutions"),
  createData(40, "IDS-201", "Presenting Recommendations for Complex Challenges",	"IDS-20040",	"Your Strengths as a Learner"),
  createData(41, "IDS-201", "Presenting Recommendations for Complex Challenges",	"COM-20041",	"Address Complex Challenges"),
  createData(42, "IDS-201", "Presenting Recommendations for Complex Challenges",	"COM-20042",	"Civic Issues"),
  createData(43, "ECO-201", "Microeconomics",	"ECO-20043",	"Microeconomics and Decisions"),
  createData(44, "ECO-201", "Microeconomics",	"ECO-20044",	"Economic Cost of Decisions"),
  createData(45, "ECO-201", "Microeconomics",	"ECO-20045",	"Market Structure Impact"),
  createData(46, "IT-101", "Advancing Professional Skills",	"IT-10046",	"Evaluate New Technologies"),
  createData(47, "IT-101", "Advancing Professional Skills",	"DAT-20047",	"Working with Data"),
  createData(48, "IT-101", "Advancing Professional Skills",	"IDS-20048",	"Professional Development Plans"),
  createData(49, "ENG-220", "Establishing Your Professional Identity",	"COM-10049",	"Professional Identity"),
  createData(50, "ENG-220", "Establishing Your Professional Identity",	"IT-10050",	"Social Media and Identity"),
  createData(51, "ENG-220", "Establishing Your Professional Identity",	"COM-10051",	"Networking Opportunities"),
  createData(52, "ECO-202", "Macroeconomics",	"ECO-20052",	"Macroeconomics and Decisions"),
  createData(53, "ECO-202", "Macroeconomics",	"ECO-20053",	"Economic Impact of Events"),
  createData(54, "ECO-202", "Macroeconomics",	"ECO-20054",	"Macroeconomic Policy Changes"),
  createData(55, "MKT-113", "Principles of Marketing", "MKT-20055", "Comminicate Market Factors"),
  createData(56, "MKT-113", "Principles of Marketing", "MKT-20056", "Target Customers"),
  createData(57, "MKT-113", "Principles of Marketing", "MKT-20057", "Promote a Brand"),
  createData(58, "OL-110", "Business Essentials",	"BUS-20058",	"Forms of Organizations"),
  createData(59, "OL-110", "Business Essentials",	"PHL-20059",	"Ethical and Cultural Decisions"),
  createData(60, "OL-110", "Business Essentials",	"IT-20060",	"Business Ops and IT"),
];


const ProjectTracker: React.FunctionComponent<IProjectTrackerProps> = (props) => {
  return (
    <div></div>
  );
};

export default ProjectTracker;
